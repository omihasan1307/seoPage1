import categoryList from "../../utils/category.json";
import TaskList from "./TaskList";

const TaskPage = () => {
  return (
    <div className="overflow-x-auto custom-scrollbar w-full pb-4">
      <div className="lg:flex lg:space-x-4 lg:w-max space-y-4 lg:space-y-0">
        {categoryList?.map((category, index) => (
          <TaskList key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
