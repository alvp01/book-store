const BookForm = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <div>
        <input
          type="text"
          placeholder="Book title"
          value=""
          required
        />
      </div>
      <div className="col-md-3">
        <input
          type="text"
          placeholder="Book author"
          value=""
          required
        />
      </div>
      <div>
        <select value="Action">
          <option>Action</option>
          <option>Classics</option>
          <option>Graphic Novel</option>
          <option>Fantasy</option>
          <option>Science Fiction</option>
          <option>Horror</option>
          <option>Economy</option>
        </select>
      </div>
      <div className="col-md-2 pb-5 pb-md-0">
        <button type="submit">
          ADD BOOK
        </button>
      </div>
    </form>
  </div>
);

export default BookForm;
