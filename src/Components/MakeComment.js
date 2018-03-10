import react from 'react'

function MakeComment(props) {
    return (
        <div>
            <form className="make-comment-form" onSubmit={props.handleSubmit}>
                <input name="author" type="text" placeholder="Author Name" />
                <input name="body" type="text" placeholder="Type your comment, fool" />
                <input type="submit" value="Submit Comment" />
            </form>
        </div>
    )
}

export default MakeComment

