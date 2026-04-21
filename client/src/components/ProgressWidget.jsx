export default function ProgressWidget({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionPercent =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="progress-widget">
      <h3>Progress Tracker</h3>
      <p>
        Tasks Completed Today: {completedTasks} / {totalTasks}
      </p>
      <p>Pending Tasks: {pendingTasks}</p>

      <div className="progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={completionPercent}>
        <div className="progress-fill" style={{ width: `${completionPercent}%` }} />
      </div>

      <p className="progress-label">{completionPercent}% complete</p>
    </div>
  );
}
