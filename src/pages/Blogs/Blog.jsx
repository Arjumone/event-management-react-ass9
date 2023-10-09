
import PropTypes from 'prop-types';

const Blog = ({blg}) => {
    const {blog} = blg
    return (
        <div className=" bg-sky-700 p-6 rounded-lg text-white mt-3">
            {blog}
        </div>
    );
};
Blog.propTypes={
    blg:PropTypes.object
}
export default Blog;