// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// import { Blog } from './Allblogs';

// export interface AddBlogProps { }

// // export interface BlogId { id: number }

// const AddBlog: React.SFC<AddBlogProps> = () => {


//     const [blog, setBlog] = useState<Blog>({
//         id: null,
//         name: null,
//         title: null,
//         content: null,
//         _created: null,
//         authorid: null
//     });

//     const [blogId, setBlogId] = useState<number>(null)

//     const getBlogId = async (name: string) => {
//         try {
//             let r = await fetch(`/api/authors/${name}`);
//             let blogId = await r.json();
//             console.log(blogId);
//             setBlogId(blogId);
//         } catch (err) {
//             console.log(err)
//         }
//     }

//     const createBlog = async (title: string, content: string, authorid: string) => {
//         try {
//             let data = { title, content, authorid };
//             let res = await fetch('/api/blogs', {
//                 method: 'POST',
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json"
//                 },
//             });
//             console.log(blog)
//             setBlog(blog);
//         } catch (err) {
//             console.log(err)
//         }

//     }





// // not sure about back on button onClick
//     return (
//         <div className="chirpInput card col-md-8 border p-3 mt-3">
//         <div className="card-body">
//             <form className="form-group mb-0 p-3">
//                 <label htmlFor="name">Name</label>
//                 <input
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
//                     type="text" className="form-control" value={this.state.name} />
//                 <label className="mt-3" htmlFor="text">Text</label>
//                 <input
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ text: e.target.value })}
//                     type="text" className="form-control" value={this.state.text} />
//                 <div className="d-flex justify-content-between m-3">
//                     <div>
//                         <select className="form-control text-secondary">
//                             <option >List of User Names</option>
//                             {this.renderUsers()}
//                         </select>
//                     </div>
//                     <div>
//                         <button className="btn btn-primary btn-outline-light"
//                             onClick={this.handleSubmit}
//                         >Submit</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     </div>
//     );
// }

// export default AddBlog;

///////////////////////////////////////

{/* <div className="chirpInput card col-md-8 border p-3 mt-3">
<div className="card-body">
    <form className="form-group mb-0 p-3">
        <label htmlFor="name">Name</label>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName({ name: e.target.value })}
            type="text" name="name" className="form-control" value={name} />
        <label className="mt-3" htmlFor="title">Title</label>
        <input onChange={handleTitleChange}
            type="text" name="title" className="form-control" value={title} />
        <label htmlFor="content"></label>
        <input onChange={handleContentChange}
            type="text" name="content" className="form-control" value={content} />
        <div>
            <button className="btn btn-primary btn-outline-light"
            >Submit</button>
        </div>
    </form>
</div>
</div> */}