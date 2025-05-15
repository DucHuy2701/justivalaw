const PostTable = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body p-0">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col" className="ps-3">
                Tiêu đề
              </th>
              <th scope="col">Nội dung</th>
              <th scope="col">Ngày tạo</th>
              <th scope="col" className="text-center">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-muted py-3">
                  Không có bài viết nào
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id}>
                  <td className="ps-3">{post.title}</td>
                  <td>{post.content.substring(0, 50)}...</td>
                  <td>{post.date}</td>
                  <td className="text-center">
                    <button
                      onClick={() => onEdit(post)}
                      className="btn btn-link text-primary p-0 me-2"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => onDelete(post.id)}
                      className="btn btn-link text-danger p-0"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostTable;
