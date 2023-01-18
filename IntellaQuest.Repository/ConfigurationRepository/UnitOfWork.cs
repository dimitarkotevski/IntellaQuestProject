using NHibernate;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Repository
{
    public interface IUnitOfWork : IDisposable
    {
        ISession Session { get; }
        ITransaction BeginTransaction();
        void Commit();
        void Rollback();
    }
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ISessionFactory _sessionFactory;

        private ITransaction _transaction;

        public ISession Session { get; set; }

        public UnitOfWork()
        {
            _sessionFactory = NHibernateContext.BuildSessionFactory();
            Session = _sessionFactory.OpenSession();
            Session.FlushMode = FlushMode.Auto;
        }

        public void Dispose()
        {
            if (Session.IsOpen)
            {
                Session.Close();
            }
        }

        public void Commit()
        {
            if (!_transaction.IsActive)
            {
                throw new InvalidOperationException("No active transation");
            }

            _transaction.Commit();
        }

        public void Rollback()
        {
            if (_transaction.IsActive)
            {
                _transaction.Rollback();
            }
        }

        public ITransaction BeginTransaction()
        {
            _transaction = Session.BeginTransaction();
            return _transaction;
        }
    }
}
