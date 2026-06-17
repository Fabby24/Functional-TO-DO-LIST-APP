import React from 'react';

function FilterButtons({ Filter, setFilter, searchTerm, setSearchTerm }) {
    return (
        <div className="filter-Section">
            <div className="filter-buttons">
                <button
                    className={`btn ${Filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={`btn ${Filter === 'completed' ? 'active' : ''}`}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
                <button
                    className={`btn ${Filter === 'pending' ? 'active' : ''}`}
                    onClick={() => setFilter('pending')}
                >
                    Pending
                </button>
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"    
                />
            </div>
        </div>
    );
}

export default FilterButtons;