import { useEffect, useState } from 'react';
import './PostItem.css';


const PostItem = ({ post }) => {
    const { content, title, tags } = post;

    const [summary, setSummary] = useState('');

    const getSummary = () => {
        const domParser = new DOMParser();
        const doc = domParser.parseFromString(content, 'text/html');
        const textContent = doc.body.textContent;
        setSummary(textContent);
    };

    useEffect(() => {
        getSummary();
    }, []);

    return (
        <div className="post-item">
            <div className="post-content">
                <div className="post-header">
                    <h3 className="post-title">{title}</h3>
                    <p className="post-summary">{summary}</p>
                    <div className="post-meta">
                        <div className="post-avatar"></div>
                        <p className="post-author">Jonas Kakaroto</p>
                        <p className="post-date">Jan.10.2023</p>
                    </div>
                </div>
            </div>
            <div className="post-tags">
                {/* {tags.map((tag, index) => (
                    <Tag name={tag} key={index} classes="tag" />
                ))} */}
            </div>
            <div className="post-cover">
                {/* {coverImg && <img className="cover-img" src={coverImg} alt="cover" />} */}
            </div>
        </div>
    );
};

export default PostItem;
