using System;
using IntellaQuest.Repository.Repositories;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using System.Linq;
using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQuest.Data.NHibernate.Repositories;
using IntellaQuest.Domain;
using IntellaQeust.BusinessLogic.Requests;
using IntellaQeust.BusinessLogic.Responses;
using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQeust.BusinessLogic.Mappers;
using IntellaQuest.Domain.Enums;
using IntellaQuest.Domain.Enum;

namespace IntellaQuest.BusinessLogic.Services
{
    public interface IOrderService
    {
        ResponseModel<OrderViewModel> GetAll(RequestModel request);
        OrderViewModel Get(Guid Id);
        Guid Create(OrderViewModel model);
        void Update(OrderViewModel model);
        void Delete(Guid Id);
        bool CheckUserExists(User user);

        ResponseListModel<OrderGridViewModel> GetUserNotActiveOrders(Guid userId);
        OrderViewModelWithProducts GetUserActiveOrder(Guid userId);
        void CancelActiveOrder(Guid orderId);
        void MakeAnOrder(Guid shoppingCartId,Guid userId);

    }
    public class OrderService : IOrderService
    {
        private readonly IUnitOfWork _unitOfWork;

        private readonly IOrderRepository _orderRepository;
        private readonly IUserRepository _userRepository;
        private readonly IShoppingCartRepository _shoppingCartRepository;
        private readonly IProductRepository _productRepository;

        public OrderService(IOrderRepository orderRepository,
                            IUserRepository userRepository,
                            IProductRepository productRepository,
                            IUnitOfWork unitOfWork,
                            IShoppingCartRepository shoppingCartRepository)
        {
            _orderRepository = orderRepository;
            _userRepository = userRepository;
            _productRepository = productRepository;
            _unitOfWork = unitOfWork;
            _shoppingCartRepository = shoppingCartRepository;
        }

        #region CRUD ADMIN
        public bool CheckUserExists(User user)
        {
            return _orderRepository.CheckExist(x => x.User == user);
        }
        public Guid Create(OrderViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var user = _userRepository.FindBy(model.User.Id);
                if(user == null)
                {
                    throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var shoppingCart = _productRepository.FindBy(model.ShoppingCart.Id);
                if(shoppingCart == null)
                {
                    throw new BllException(ShopExceptionMassages.ProductsExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var order = new Order
                {
                    User =user,
                    //ShoppingCart =user.ShoppingCart,
                    OrderStatus =model.OrderStatus,
                };
                _orderRepository.Add(order);
                _unitOfWork.Commit();
                return order.Id;
            }
        }
        public void Delete(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                _orderRepository.Delete(Id);
                _unitOfWork.Commit();
            }
        }
        public OrderViewModel Get(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var orderEntity=_orderRepository.FindBy(Id);
                if (orderEntity == null)
                {
                    throw new BllException(ShopExceptionMassages.OrderExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                _unitOfWork.Commit();
                return orderEntity.MapToViewModel();
            }
        }
        public ResponseModel<OrderViewModel> GetAll(RequestModel request)
        {
            return FilterAndPage(request);
        }
        private ResponseModel<OrderViewModel> FilterAndPage(RequestModel request)
        {
            using (_unitOfWork.BeginTransaction())
            {
                ResponseModel<OrderViewModel> response = new ResponseModel<OrderViewModel>();
                IQueryable<Order> ordersListForFiltering = _orderRepository.All();

                if (!string.IsNullOrEmpty(request.SearchString))
                {
                    ordersListForFiltering = ordersListForFiltering
                                        .Where(x => x.User.FirstName.Contains(request.SearchString));
                }


                switch (request.SortName)
                {
                    case "ProductName":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderBy(x => x.ShoppingCart.ShoppingCartDetails);
                        }
                        else
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderByDescending(x => x.ShoppingCart.ShoppingCartDetails);
                        }
                        break;
                    case "UserName":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderBy(x => x.User.FirstName);
                        }
                        else
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderByDescending(x => x.User.FirstName);
                        }
                        break;
                    case "Quantity":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderBy(x => x.OrderStatus);
                        }
                        else
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderByDescending(x => x.OrderStatus);
                        }
                        break;
                    default:
                        break;
                }
                if (request.Size == 0 && request.PageNeeded == 0)
                {
                    request.PageNeeded = 1;
                    request.Size = ordersListForFiltering.Count();
                }

                response.Size = request.Size;
                response.CurrentPage = request.PageNeeded;
                response.Items = ordersListForFiltering
                                    .Skip((response.CurrentPage - 1) * response.Size)
                                    .Take(response.Size).Select(x => x.MapToViewModel()).ToList();
                response.TotalItems = ordersListForFiltering.ToList().Count();

                return response;
            }
        }
        public void Update(OrderViewModel model)
        {
            using(_unitOfWork.BeginTransaction())
            {
                var entityOrder = _orderRepository.FindBy(model.Id);
                if (entityOrder == null)
                {
                    throw new BllException(ShopExceptionMassages.OrderExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var user = _userRepository.FindBy(model.User.Id);
                if(user == null)
                {
                    throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                
                //entityOrder.ShoppingCart = user.ShoppingCart;
                entityOrder.User = user;
                entityOrder.OrderStatus = model.OrderStatus;
                
                _orderRepository.Update(entityOrder);
                _unitOfWork.Commit();
            }
        }
        #endregion

        #region USER

        public ResponseListModel<OrderGridViewModel> GetUserNotActiveOrders(Guid userId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var userOrder = _orderRepository.FilterBy(x => x.User.Id == userId && x.OrderStatus == OrderStatus.Completed)
                    ?? throw new BllException(ShopExceptionMassages.OrderExceptionMassages.NOT_FOUND_EXCEPTION);

                return new ResponseListModel<OrderGridViewModel>
                {
                    Items = userOrder.Select(x => x.MapToGridViewModel()).ToList(),
                    TotalItems = userOrder.Count()
                };
            }
        }

        public OrderViewModelWithProducts GetUserActiveOrder(Guid userId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var userOrder = _orderRepository.FilterBy(x => x.User.Id == userId && x.OrderStatus != OrderStatus.Completed).FirstOrDefault()
                    ?? throw new BllException(ShopExceptionMassages.OrderExceptionMassages.NOT_FOUND_EXCEPTION);

                userOrder.TotalAmount = userOrder.ShoppingCart.ShoppingCartDetails.Select(x=>x.Product.Price * x.Quantity).Sum();
                _orderRepository.Update(userOrder);

                _unitOfWork.Commit();

                return userOrder.MapToViewModelWithProducts();
            }
        }

        public void CancelActiveOrder(Guid orderId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var order = _orderRepository.FindBy(orderId)
                    ?? throw new BllException(ShopExceptionMassages.OrderExceptionMassages.NOT_FOUND_EXCEPTION);

                _orderRepository.Delete(order);
                _unitOfWork.Commit();
            }
        }

        public void MakeAnOrder(Guid shoppingCartId,Guid userId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var shoppingCart = _shoppingCartRepository.FindBy(shoppingCartId)
                    ?? throw new BllException(ShopExceptionMassages.ShoppingCartExceptionMassages.DETAIL_NOT_FOUND_EXCEPTION);

                var user = _userRepository.FindBy(userId)
                    ?? throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);

                if(_orderRepository.CheckExist(x=>x.User == user && x.ShoppingCart == shoppingCart))
                {
                    return;
                }
                else
                {
                    Order order = new Order
                    {
                        ShoppingCart = shoppingCart,
                        User = user,
                        PaymentType = PaymentType.Cash,
                        DateCreated = DateTime.Now,
                        TotalAmount = shoppingCart.ShoppingCartDetails.Select(x=>x.Product.Price * x.Quantity).Sum(),
                        OrderName = "Order#11111",
                        OrderStatus = OrderStatus.OnHold
                    };
                    _orderRepository.Add(order);
                    _unitOfWork.Commit();
                }
            }
        }
        #endregion
    }
}
