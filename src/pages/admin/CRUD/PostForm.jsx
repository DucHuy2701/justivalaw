const PostForm = ({
  isOpen,
  title,
  content,
  setTitle,
  setContent,
  onSubmit,
  onCancel,
  isEditing,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {isEditing ? "Sửa bài viết" : "Thêm bài viết"}
            </h5>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  placeholder="Nhập tiêu đề"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="content" className="form-label">
                  Nội dung
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="form-control"
                  rows="4"
                  placeholder="Nhập nội dung"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={onCancel}
                className="btn btn-secondary"
              >
                Hủy
              </button>
              <button type="submit" className="btn btn-primary">
                {isEditing ? "Cập nhật" : "Thêm"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
