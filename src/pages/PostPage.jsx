import React,{useState, useEffect} from 'react' ;
import sanityClient  from "../client.js";
import Post from '../components/Post';  

const PostPage = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
    }
        }`).then((data) => setPost(data)).catch(console.error);
  }, []);

  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>Blog Posts Page</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my page of blog posts</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {postData && postData.map((post, index) => ( <Post key={index} slug={post.slug.current} title={post.title} imageUrl={post.mainImage.asset.url} altImage={post.mainImage.alt} />))}
        </div>

      </section>
    </main>
  )
}

export default PostPage