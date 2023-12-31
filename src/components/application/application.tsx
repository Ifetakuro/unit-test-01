const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>

      <img src="https://via.placeholder.com/150" alt="a person with a laptop" />

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value={"Vishwas"}
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select name="" id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="NG">Nigeria</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
        <button type="submit" disabled={true}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Application;
