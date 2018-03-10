import react from 'react'

function MakePost(props) {
    return (
        <div>
            <form className="make-post-form" onSubmit={props.handleSubmit}>
                <select name="category" className="make-post-category-select">
                    <label>Select a category</label>
                    <option selected="selected">- none -</option>
                    <option>Crushing Despair</option>
                    <option>Intractable Apathy</option>
                    <option>Exploding Rage</option>
                    <option>Distracted Bemusement</option>
                </select>
                <input name="author" type="text" placeholder="Author Name" />
                <input name="title" type="text" placeholder="Post Title" />
                <input name="body" type="text" placeholder="Type your post here" />
                <input type="submit" value="Post your Post, Posty" />
            </form>
        </div>
    )
}

export default MakePost

