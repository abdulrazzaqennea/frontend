import { Spinner } from "reactstrap";

const CommonSpinner = () => {
  return (
    <div class="text-center text-info">
      <div class="d-flex justify-content-center">
        <div
          class="spinner-border m-5 p-5"
          style={{ width: `5rem`, height: `5rem` }}
          role="status"
        >
          <span class="sr-only"></span>
        </div>
      </div>
      <h2>Loading...</h2>
    </div>
  );
};

export default CommonSpinner;
