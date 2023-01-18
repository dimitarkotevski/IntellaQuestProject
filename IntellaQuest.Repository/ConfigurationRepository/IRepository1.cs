using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace IntellaQuest.Repository.Repositories
{
    public interface IRepository1<T> where T : class
    {
        bool Add(IEnumerable<T> items);
        bool Add(T entity);
        IQueryable<T> All();
        bool Delete(IEnumerable<T> entities);
        bool Delete(T entity);
        IQueryable<T> FilterBy(Expression<Func<T, bool>> expression);
        T FindBy(Expression<Func<T, bool>> expression);
        T FindBy(int id);
        bool Update(IEnumerable<T> items);
        bool Update(T entity);
    }
}