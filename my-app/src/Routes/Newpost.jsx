import { Form } from "react-router-dom";
import { create } from "../post";
import {useFormik} from "formik"
// export async function submitPost(request){

//     const data= await request.request.formData();
// const post={
//     title: data.get('title'),
//     content: data.get('content')
// }    ;
// console.log(title)
//  await create(post);
// alert('New post created sucessfully');

// }

export default function NewPost() {
    const formik =useFormik({
        initialValues:{
        title: '',
        content:''
        },
        validate: function (values){
            let errors={};
            if (values.title =='')
            {
                errors.title="Please Provide Feild"
            }
             if (values.content =='')
            {
                errors.content="Please Provide Feild"
            }
           
            return errors;

        },
        onSubmit :  async function (values){
            
            await create (values);
           alert("Post created sucessfuly");
        }
    })
    return (
        <>
            <h1 class="title">Create new post
                <br />
                <span class="subtitle"></span>
            </h1>

            <form  onSubmit={formik.handleSubmit} method="post" >
                <label for="fname">Post Title</label>
                <input type="text" id="title" name="title"  onChange={formik.handleChange} value={formik.values.title} placeholder="Title of the post" />
                {
                    formik.errors.title?(
                        <small style={{color:'red',display:"block"}}>{formik.errors.title} </small>
                    ):null
                }
                <label for="content">Content</label>
                
                <textarea type="text" id="content" name="content" onChange={formik.handleChange} value={formik.values.content} placeholder=""></textarea>
                {
                    formik.errors.content?(
                        <small style={{color:'red',display:"block"}}>{formik.errors.content} </small>
                    ):null
                }
                <input type="submit" value={formik.isSubmitting?"Submiting...." :"Submit"} disabled={formik.isSubmitting} />
            </form>
        </>
    );
}