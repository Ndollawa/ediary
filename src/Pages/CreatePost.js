import React, {useState, FormEvent, FormEventHandler, HtmlHTMLAttributes} from "react";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import {IoMdPricetags,IoIosList,IoMdColorWand,IoIosCreate,IoIosClose,IoIosTrash} from 'react-icons/io'
import Tinymce from "../utils/client/Tinymce";




const CreatePost = ({pageProps}) => { 
const [tags, setTags] = useState([]);
const [tagName, setTagName] = useState("")
const [coverImage, setCoverImage] = useState("")
const [coverImageURLS, setCoverImageURLS] = useState("")
const [attachmentFiles, setAttachmentFiles] = useState([])
const [attatchmentFilesURLS, setAttatchmentFilesURLS]= useState([])

// const tagwrapper= document.getElementsByClassName('tag-wrapper')!;
// post tag generator
// first letter to upperCase .charAt(0).toUpperCase()+ tagName.slice(1)
    const addTag = (e) =>{
        if( e.key === 'Enter' ){
          setTags(prevTags=>[...prevTags,tagName.replace(/^./, tagName[0].toUpperCase())])
          setTagName("") 
        }
      }

      // removes a tag from the tags array
    const removeTag = (e) => {
      // alert(e.currentTarget.getAttribute("id"))
        const currentTags = tags.filter((tag) =>tag !== e.currentTarget.getAttribute("id"))
      setTags(currentTags)
    }

    // File upload Handler
    
  const handleFileUpload =(e, uploadType)=>{

    var totalfiles = e.target.files.length;
    for (var index = 0; index < totalfiles; index++) {
    var file = e.currentTarget.files[index];  
      const reader = new FileReader();
               reader.readAsArrayBuffer(file);
               reader.onload = ((e)=>{
     let filedata:any = e.target.result;
     let mediafile = new Blob([new Uint8Array(filedata)],{type: e.type});
     let fileurl = (window.URL || window.webkitURL).createObjectURL(mediafile);
     if(uploadType === "coverImage"){
     setCoverImageURLS(fileurl)

     }else if(uploadType === "attachmentFiles"){
      setAttatchmentFilesURLS(prev => [...prev,fileurl])

      }
    //  $('#previewhref'+index).attr('src', fileurl);
    //  $(.attr('src', fileurl);
               })
    //     postData.append("postupdateshareFile[]", document.getElementById('postupdateshareFile')!.files[index]);
    }

  }
      // Handles post form submit
    const postSubmit = (event)=>{
      event.preventDefault();
    }
const removeFile =(e,type,index=null)=>{
if(type ===  "coverImage"){
  setCoverImage("")
  setCoverImageURLS("")
}else if(type ===  "attachmentFiles"){
setAttatchmentFilesURLS(prev=>prev.filter((files)=>prev.indexOf(files) !== index))

}
  
}


  return (
    
    <section className="max-w-7xl mx-auto py-4 px-5 h-full">
    <div className="flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-semibold pt-2 pb-6">{pageProps.pageTitle}</h1>
    </div>
    <div className="w-full card py-5 rounded-xl">
      <form
        action=""
        id="createpost"
        className="form"
        encType="multipart/form-data"
        method="post"
        onSubmit={postSubmit}
      >
        <fieldset className="p-2"><legend>New Post Data</legend>
          <div className="bg-white  py-5 xs:p-3 sm:p-4">
            <div className="grid gap-6 grid-cols-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Post Title<span className="required"> * </span>
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-600 px-3 text-xl text-white"><IoIosCreate/></span>
                  
                <input
                  type="text"
                  name="postTitle"
                  id="postTitle"
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                </div>
              </div>
{/* 
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">Website</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">http://</span>
                  <input type="text" name="company-website" id="company-website" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="www.example.com"/>
                </div>
              </div>
            </div> */}

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postCategory"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category<span className="required"> * </span>
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0  bg-gray-600 px-3 text-xl text-white"><IoIosList/></span>
                  <input
                  type="text"
                  name="postCategory"
                  id="postCategory"
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postTag"
                  className="block text-sm font-medium text-gray-700"
                >
                   Post Tags<span className="required"> * </span>
                </label> 
                <div className="tag-container">
                  <span className="inline-flex w-25 items-center rounded-l-md border border-r-0  bg-gray-600 px-3 text-xl text-white">
                 <IoMdPricetags/> </span>
                   <div className="mt-1 rounded-md shadow-sm tag-wrapper">
                      {tags.map((tagName,i)=>{
                   return(
                   <div className="tag" key={i}>
                      <span >{tagName}</span>
                        <button type="button" id={tagName} onClick={removeTag} className="text-sm ml-1.5" title ="Remove  Tag"><IoIosClose /></button>
                      </div>
                      )})
                      }
                    <input 
                      className="tag-input" 
                      name="tag-input"
                      value={tagName}
                      onChange={(e)=>setTagName(e.target.value)}
                      onKeyDown={addTag} 
                      type="text" />
                  </div>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postStatus"
                  className="block text-sm font-medium text-gray-700"
                >
                 Post Status
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 bg-gray-600 px-3 text-xl text-white"><IoMdColorWand/></span>
                  
                <select
                  id="postStatus"
                  name="postStatus"
                  className="block w-full flex-1 rounded-none h-10 px-2 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                > 
                    <option value="Draft">Select Post Status...</option>
                      <option value="Published">Publish</option>
                      <option value="Draft"> Draft</option>
                      <option value="other">other</option>
                </select>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3 flex justify-center flex-col">
              <label
                  htmlFor="postCoverImage" className="block text-sm font-medium text-gray-700">
                Post Cover Iamge</label>
                <div className="grid grid-cols-2">
              <div className="mt-1 md:grid-cols-6 grid-cols-12 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex sm:flex-col items-center text-sm text-gray-600">
                    <label htmlFor="postCoverImage" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input 
                  name="postCoverImage"
                  id="postCoverImage" 
                  type="file" 
                  accept="*/images"
                  className="sr-only"
                  value={coverImage}
                  onChange={(e)=>handleFileUpload(e,"coverImage")}/>
                  
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              <div className="mt-1 md:grid-cols-6 grid-cols-12 flex justify-center rounded-md px-6 pt-5 pb-6">
                <div className="flex items-center relative">
                 {coverImageURLS && <><img src={coverImageURLS} alt="Post Cover" /><span className="absolute text-2xl top-0 right-0 h-8 w-8 rounded-sm center hover:bg-slate-50" onClick={(e)=>removeFile(e,"coverImage")}><IoIosTrash className="text-red-700" title="Remove"/></span></>}
                </div>
                </div>
                </div>
            </div>

              <div className="col-span-6 sm:col-span-3 flex justify-center flex-col">
              <label
                  htmlFor="postAttachments" className="block text-sm font-medium text-gray-700">
                  Post Attachments</label>
              <div className="grid grid-cols-2">
              <div className="mt-1 md:grid-cols-6 grid-cols-12 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 items-center justify-center text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex  sm:flex-col items-center text-sm text-gray-600">
                    <label htmlFor="postAttachments" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input 
                  name="postAttachments"
                  id="postAttachments" 
                  type="file" 
                  multiple 
                  className="sr-only"
                  value={attachmentFiles}
                  onChange={(e)=>handleFileUpload(e,"attachmentFiles")}
                  />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">Videos, Music,Files, Apps  up to 1024MB</p>
                </div>
              </div>

              <div className="mt-1 md:grid-cols-6 grid-cols-12 flex justify-center rounded-md relative">
                <div className="flex">
                <LightGallery
                // onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]} elementClassNames="flex flex-wrap relative top-0"
            >
              {
            attatchmentFilesURLS.map((image, i)=>{

               let attStyles = i > 3 ? "relative flex flex-col w-6/12 hidden" :"relative flex flex-col w-6/12 " 
                return(
                  <a href={image} className={attStyles}>
                    <img alt="img1"  key={i} src={image} /><span className="absolute text-2xl top-0 right-0 h-8 w-8 rounded-sm center hover:bg-slate-50" onClick={(e)=>removeFile(e,"attachmentFiles",i)}><IoIosTrash className="text-red-700" title="Remove"/></span>
                  {attatchmentFilesURLS.length > 4 && i === 3 ? <span className="bg-gray-900 bg-gradient-to-b z-1 absolute self-center top-16 mx-auto text-xl font-extrabold text-white">{(attatchmentFilesURLS.length-4) +"+ More" }</span>: null }
                </a>
                  
                )
              })}
              
            </LightGallery>
                </div>
                </div>
              </div>
            </div>
            
             

            
                <div className="col-span-6">
                <label
                  htmlFor="postContent"
                  className="block text-sm font-medium text-gray-700"
                >
                  Post Content<span className="required"> *</span>
                </label>
                {/* <textarea
                  name="postContent"
                  id="postContent"
                  rows={20}
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea> */}
            <Tinymce />
              </div>
            </div>
          </div>
        </fieldset>
      <div className="flex items-center justify-center w-full py-4 px-10">
        <button type="submit" className="w-24 h-10 p-2 bg-slate-300 shadow-md rounded-xl mr-5" name=" ">Cancel</button>
        <button type="submit" className="w-24 h-10 p-2 bg-blue-800 text-white shadow-md rounded-xl mr-5" name=" ">Submit</button>
      </div>
      </form>
    </div>
    </section>
  );
};

export default CreatePost;
