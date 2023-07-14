using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;
using System;
using IntellaQuest.Data.NHibernate.Repositories;
using IntellaQuest.Repository.Repositories;
using IntellaQeust.BusinessLogic.Mappers;

namespace IntellaQuest.BusinessLogic.Services
{
    public interface IShoppingCartService
    {
        #region ShoppingCart
        ShoppingCartViewModel GetUserShoppingCartWithProducts(Guid userId);
        void AddProductToShoppingCart(Guid userId, Guid productId, int quality);
        #endregion
        #region ShoppingCartDetails Action
        void RemoveProductFromShoppingCart(Guid shoppingCartDetailId);
        #endregion
    }
    public class ShoppingCartService : IShoppingCartService
    {
        private readonly IUnitOfWork _unitOfWork;

        private readonly IShoppingCartRepository _shoppingCartRepository;
        private readonly IUserRepository _userRepository;
        private readonly IProductRepository _productRepository;
        private readonly IShoppingCartDetailRepository _shoppingCartDetailRepository;
        public ShoppingCartService(
            IShoppingCartRepository shoppingCartRepository,
            IUnitOfWork unitOfWork,
            IUserRepository userRepository,
            IProductRepository productRepository,
            IShoppingCartDetailRepository shoppingCartDetailRepository)
        {
            _shoppingCartRepository = shoppingCartRepository;
            _unitOfWork = unitOfWork;
            _userRepository = userRepository;
            _productRepository = productRepository;
            _shoppingCartDetailRepository = shoppingCartDetailRepository;
        }


        public ShoppingCartViewModel GetUserShoppingCartWithProducts(Guid userId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var user = _userRepository.FindBy(userId)
                    ?? throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);

                var userShoppingCart = _shoppingCartRepository.FindBy(x => x.User.Id == userId == x.Active == true);


                return userShoppingCart.MapToViewModel();
            }
        }

        public void AddProductToShoppingCart(Guid userId, Guid productId, int quality)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var user = _userRepository.FindBy(userId);
                if (user == null)
                    throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);
                var product = _productRepository.FindBy(productId);
                if (product == null)
                    throw new BllException(ShopExceptionMassages.ProductsExceptionMassages.NOT_FOUND_EXCEPTION);

                var shoppingCart = _shoppingCartRepository.FindBy(x => x.User.Id == userId == x.Active == true);

                var exist = _shoppingCartDetailRepository.CheckExist(x =>
                    x.Product == product &&
                    x.ShoppingCart == shoppingCart &&
                    x.ShoppingCart.User == user);

                if (exist)
                {
                    var shoppingDetail = _shoppingCartDetailRepository.FindBy(x =>
                    x.Product == product &&
                    x.ShoppingCart == shoppingCart &&
                    x.ShoppingCart.User == user);

                    shoppingDetail.Quantity++;

                    _shoppingCartDetailRepository.Update(shoppingDetail);
                    _unitOfWork.Commit();
                }
                else
                {
                    var shoppingCartDetail = new ShoppingCartDetail
                    {
                        Product = product,
                        ShoppingCart = shoppingCart,
                        Quantity = quality
                    };

                    _shoppingCartDetailRepository.Add(shoppingCartDetail);

                    _unitOfWork.Commit();
                }
            }
        }

        public void RemoveProductFromShoppingCart(Guid id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var detailCart = _shoppingCartDetailRepository.FindBy(id);
                if (detailCart == null)
                {
                    throw new BllException("Detail not exist");
                }

                _shoppingCartDetailRepository.Delete(detailCart);
                _unitOfWork.Commit();
            }
        }
    }
}
