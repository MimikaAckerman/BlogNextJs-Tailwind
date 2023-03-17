import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

//then we want to looop over all those posts to extract the fronmatter part to get the title and image
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    //definimos el slug(URL) para la pagina, que es el nombre del archivo sin la parte de .md part
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    //luego leemos el archivo usando fs module nuevamente y una vez cargado , usamos el  matter packege para leer el archivo y extraer el data 
    const { data: frontmatter } = matter(readFile);
    //extraemos el data y lo desestructuramos como la variable frontmatter, es decir lo unico que hacemos es cambiar una variable por la otra
    return {
      slug,
      frontmatter,
    };
  });
  //aqui en lo ultimo es devolver los props que recibira nuestro componente

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  //
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
        >
          <Link href={`/post/${slug}`}>
           
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className='p-4'>{frontmatter.title}</h1>
           
          </Link>
        </div>
      ))}
    </div>
  );
}
