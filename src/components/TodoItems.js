import React from "react";

const TodoItems = (props) => {
    const { items, delet } = props;
    const len = items.length;

    const TheItems = len ?(items.map((item) => {
        return (
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={()=>delet(item.id)}>&times;</span>
            </div>
        )
    })):(<p>there is no items</p>)
    return (
        <div className="listitem">
        <div>
            <span className="name title">Name</span> 
            <span className="age title">Age</span> 
            <span className="action title">Action</span>
        </div>
        {TheItems}
        </div>
    )

}

export default TodoItems;