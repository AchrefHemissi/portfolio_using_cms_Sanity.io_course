import React, {useEffect , useState }from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder  from '@sanity/image-url';
import SinglePostComponent from '../components/SinglePostComponent.jsx';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePostPage = () => {
  const [postData, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient.fetch(`*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`)
    .then((data) => setPost(data[0]))
    .catch(console.error)
  },[slug]);

  if (!postData) return <div>Loading...</div>

  return (
    <SinglePostComponent title={postData.title} urlAuthorImage={urlFor(postData.authorImage).url()} authorName={postData.name} urlMainImage={urlFor(postData.mainImage).url()} postTitle={postData.title} body={postData.body} />
  )
}

export default SinglePostPage