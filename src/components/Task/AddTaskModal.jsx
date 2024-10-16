import { useState } from "react";

const AddTaskModal = ({ onSave, taskToUpdate, onCloseClick }) => {
  const [newTask, setNewTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );

  const [isAdd] = useState(Object.is(taskToUpdate, null));

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(newTask, isAdd);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="relative w-full max-w-[740px] p-4">
          <form
            className="max-h-[90vh] overflow-y-auto rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:p-11"
            onSubmit={handleSubmit}
          >
            <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
              {isAdd ? "Add New Task" : "Edit Task"}
            </h2>

            <div className="space-y-9 text-white lg:space-y-10">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="title">Title</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="title"
                  id="title"
                  value={newTask.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="description">Description</label>
                <textarea
                  className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                  type="text"
                  name="description"
                  id="description"
                  value={newTask.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
                <div className="space-y-2 lg:space-y-3">
                  <label htmlFor="tags">Tags</label>
                  <input
                    className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                    type="text"
                    name="tags"
                    id="tags"
                    value={newTask.tags}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2 lg:space-y-3">
                  <label htmlFor="priority">Priority</label>
                  <select
                    className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                    name="priority"
                    id="priority"
                    value={newTask.priority}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-16 flex justify-between lg:mt-20">
              <button
                className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
                onClick={onCloseClick}
              >
                Close
              </button>
              <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
              >
                {isAdd ? "Create Task" : "Update Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTaskModal;
