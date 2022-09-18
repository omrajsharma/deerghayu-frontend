import { bgcolor } from '@mui/system'
import React from 'react'
import './styles/Categories.css'

const categories = [
    {
        id: 1,
        name: 'Cardio',
        image: 'https://images.unsplash.com/photo-1517436073-3b7b1f3b5f1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGlvJTIwY2F0JTIwY2F0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        bgcolor: '#FFD6D6'
    },
    {
        id: 2,
        name: 'Strength',
        image: 'https://images.unsplash.com/photo-1517436073-3b7b1f3b5f1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGlvJTIwY2F0JTIwY2F0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        bgcolor: '#fff6e9'
    },
    {
        id: 3,
        name: 'Yoga',
        image: 'https://images.unsplash.com/photo-1517436073-3b7b1f3b5f1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGlvJTIwY2F0JTIwY2F0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        bgcolor: '#edf9fb'
    },
    {
        id: 4,
        name: 'Pilates',
        image: 'https://images.unsplash.com/photo-1517436073-3b7b1f3b5f1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGlvJTIwY2F0JTIwY2F0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        bgcolor: '#FFD6D6'
    },

]

function Categories() {
  return (
    <div className='categories-container'>
        <p className='categories-text'>Categories</p>
        <div className='categories-list'>
            {categories.map((category) => (
                <div className='category-card' style={{backgroundColor: category.bgcolor}}>
                    <div className='category-card-body'>
                        {category.name}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories