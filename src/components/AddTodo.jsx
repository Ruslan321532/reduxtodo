import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, updateTodo } from "../redux/actions";

export const AddTodo = () => {
  const [value, setValue] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.todoReducer.isEdit);
  const editTodo = useSelector((state) => state.todoReducer.editTodo);

  useEffect(() => {
    editTodo && setValue(() => editTodo);
  }, [editTodo]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!value?.title) {
      setError((error) => ({
        ...error,
        title: "Please enter todo title",
      }));
      return;
    }
    if (!value?.description) {
      setError((error) => ({
        ...error,
        description: "Please enter todo description",
      }));
      return;
    }

    if (isEdit) {
      dispatch(updateTodo(editTodo.id, value));
    } else {
      dispatch(addNewTodo(value));
    }
    setValue({ title: "", description: "" });
    document.getElementById("todoForm").reset();
  };

  const changeEvent = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    if (e?.target?.name === "title") {
      setError({
        title: "",
      });
    }
    if (e?.target?.name === "description") {
      setError({
        description: "",
      });
    }
  };
  const contStyle = {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "400",
    lineHeight: "20px",
    color: "#D1B59A",
  };
  const namest = {
    paddingLeft: "30px",
    color: "#D1B59A",
  };
  const inpst = {
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
  };

  return (
    <div className="container" style={contStyle}>
      <form className="todoforms" id="todoForm" onSubmit={onSubmit}>
        <div className="row">
          <div className="names-label" style={namest}>
            <label className="sr-name">Name</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Todo Title"
              defaultValue={value?.title}
              onChange={(e) => changeEvent(e)}
            />
            <span className="text-danger">{error?.title}</span>
          </div>

          <div className="Description-pText">
            <label className="sr-pText">Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              defaultValue={value?.description}
              onChange={(e) => changeEvent(e)}
              style={inpst}
            />
            <span className="text-danger">{error?.description}</span>
          </div>
          <div className="search-pText">
            <label className="sr-pText">search</label>
            <input
              type="search"
              name="search"
              className="form-control"
              placeholder="search"
              style={inpst}
            />
          </div>

          <div className="uptodo">
            <button className="btn btn-primary" type="submit">
              {" "}
              {isEdit ? "Update Todo" : "Create Todo"}{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
