import BlockContent from '@sanity/block-content-to-react';

const SinglePostComponent = ({title , urlAuthorImage , authorName , urlMainImage , postTitle , body}) => {
  return (
    <main className="bg-gray-200 min-h-screen p-12">
        <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
            <header className="relative">
                <div className="absolute h-full w-full items-center justify-center p-8">
                    <div className="bg-white bg-opacity-75 rounded p-12">
                        <h1 className="cursive text-3xl lg:text-6xl mb-4">
                            {title}
                        </h1>
                        <div className="flex justify-center text-gray-800"> 
                            <img src={urlAuthorImage} alt={authorName} className="w-10 h-10 rounded-full" />
                            <p className="cursive flex items-center pl-2 text-2xl">{authorName}</p>
                        </div>
                        
                    </div>
                </div>
                <img src={urlMainImage} alt={postTitle} className="w-full object-cover rounded-t"
                style={{height:"400px"}} />
            </header>
            <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full"><BlockContent blocks={body} projectId="chr3isw4" dataset="production"/> </div>
        </article>
    </main>
   
  )
}

export default SinglePostComponent