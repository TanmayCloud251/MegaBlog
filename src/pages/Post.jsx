import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-8 relative border border-gray-100 rounded-3xl p-4 bg-white shadow-lg overflow-hidden">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-2xl w-full object-cover max-h-[600px]"
                    />

                    {isAuthor && (
                        <div className="absolute right-8 top-8 flex gap-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-600" className="shadow-lg">
                                    Edit Post
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-600" onClick={deletePost} className="shadow-lg">
                                Delete Post
                            </Button>
                        </div>
                    )}
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="w-full mb-8 text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">{post.title}</h1>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}