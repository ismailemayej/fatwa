"use client";
import React, { useState, useEffect } from "react";
import { FaShareAlt } from "react-icons/fa";

import { BiSolidLike } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { toast } from "sonner";
import { Update } from "../DataAction/DataHandle";
import Link from "next/link";
import Image from "next/image";

import { ScrollShadow } from "@nextui-org/react";
import ModalCommon from "../Modal/Modal";
import CommentProfile from "../commentProfile";

interface Comment {
  comment: string;
  email: string;
  name: string;
}

interface Post {
  qn: string;
  likes: number;
  comments: Comment[];
}

const Reviews = ({ post, user }: { post: Post; user: any }) => {
  const [likes, setLikes] = useState<number>(post?.likes || 0);
  const [comments, setComments] = useState<Comment[]>(post?.comments || []);
  const [newComment, setNewComment] = useState<string>("");

  // Track whether the user has liked the post
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  // Check if the user has already liked the post from localStorage (optional)
  useEffect(() => {
    const likedStatus = localStorage.getItem(`liked-${post.qn}`);
    if (likedStatus === "true") setHasLiked(true);
  }, [post.qn]);

  // Handle Like
  const handleLike = async () => {
    if (hasLiked) {
      toast.error("You can only like once.");
      return;
    }

    const updatedData = { ...post, likes: likes + 1 };
    setLikes(likes + 1);
    setHasLiked(true); // Disable further likes

    // Persist this action in local storage
    localStorage.setItem(`liked-${post.qn}`, "true");

    try {
      await Update(updatedData, "questions", post?.qn);
      toast.success("Like added");
    } catch (error) {
      toast.error("Error adding like");
    }
  };

  // Handle Comment Submission
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    // Create the new comment object
    const commentObject: Comment = {
      comment: newComment,
      email: user?.email,
      name: user?.name,
    };

    const updatedComments = [...comments, commentObject]; // Add the new comment to the existing comments
    const updatedData = { ...post, comments: updatedComments };

    try {
      await Update(updatedData, "questions", post?.qn); // Update the post data in the database
      setComments(updatedComments);
      setNewComment(""); // Clear the input field after submission
      toast.success("Comment added successfully");
    } catch (error) {
      toast.error("Error adding comment");
    }
  };

  // Handle Share (copy link to clipboard)
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Post link copied to clipboard!");
  };

  return (
    <div className="post-page">
      {user?.email ? (
        <>
          <div className="post-actions flex justify-between mx-10">
            {hasLiked ? (
              <button
                onClick={handleLike}
                className="flex gap-2 rounded-xl px-2 py-1 items-center"
                disabled={hasLiked}
              >
                {likes} <BiSolidLike className="size-8" />
              </button>
            ) : (
              <button
                onClick={handleLike}
                className="text-white flex gap-2 items-center rounded-xl px-2 py-1"
                disabled={hasLiked}
              >
                {likes} <SlLike className="size-6" />
              </button>
            )}

            <button className="size-8" onClick={handleShare}>
              <FaShareAlt />
            </button>
          </div>

          {/* Comment Section */}
          <div className="comment-section">
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
                className="border rounded p-2 w-full"
              />
              <button
                className="bg-green-500 px-2 py-1 rounded-xl text-white mt-2"
                type="submit"
              >
                Comment
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="flex gap-2 text-center justify-center items-center border rounded-full">
          <p className="text-red-500">Please LogIn First for Like & comment</p>
          <Link href="/login" className="font-bold text-blue-500">
            Login
          </Link>
        </div>
      )}

      {/* Render Comments */}
      <div className="mt-4 line-clamp-3">
        {}
        {comments &&
          comments.map((comment: any) => <CommentProfile comment={comment} />)}
      </div>
      {comments?.length > 3 && (
        <div className="text-center">
          <ModalCommon
            button="See all Comments"
            body={
              <>
                <div className="text-center">All Comments</div>
                <ScrollShadow
                  hideScrollBar
                  offset={100}
                  orientation="horizontal"
                  className=" border-t-gray-300 border-2 shadow-2xl rounded-xl  h-screen col-span-6 p-2"
                >
                  {comments &&
                    comments.map((comment: any, index: number) => (
                      <CommentProfile key={index} comment={comment} />
                    ))}
                </ScrollShadow>
              </>
            }
          />
        </div>
      )}
    </div>
  );
};

export default Reviews;
