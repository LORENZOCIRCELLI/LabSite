import {useParams} from "react-router-dom";
import posts from "../data/posts.json";
import type { Post } from "../types.ts";

export default function PostPage(){
    const { id } = useParams();
    const post = (posts as Post[]).find((p) => p.id === id);

    if(!post){
        return <h2>Post Não Encontrado!</h2>
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
