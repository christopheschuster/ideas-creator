// filename: SophisticatedCode.js

// This code is a sophisticated implementation of a task management system.
// It includes features such as creating tasks, assigning them to users, setting due dates,
// adding notes, marking tasks as completed, and generating reports.

// Define the Task class
class Task {
  constructor(id, name, assignee, dueDate, notes, completed) {
    this.id = id;
    this.name = name;
    this.assignee = assignee;
    this.dueDate = dueDate;
    this.notes = notes;
    this.completed = completed;
  }

  markCompleted() {
    this.completed = true;
  }
}

// Define the TaskManager class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(name, assignee, dueDate, notes) {
    const id = this.tasks.length + 1;
    const task = new Task(id, name, assignee, dueDate, notes, false);
    this.tasks.push(task);
  }

  getTasksByAssignee(assignee) {
    return this.tasks.filter((task) => task.assignee === assignee);
  }

  getTasksDueToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.tasks.filter((task) => {
      const taskDueDate = new Date(task.dueDate);
      taskDueDate.setHours(0, 0, 0, 0);
      return taskDueDate.getTime() === today.getTime();
    });
  }

  generateReport() {
    let report = 'Task Report:\n\n';

    this.tasks.forEach((task) => {
      report += `ID: ${task.id}\n`;
      report += `Name: ${task.name}\n`;
      report += `Assignee: ${task.assignee}\n`;
      report += `Due Date: ${task.dueDate}\n`;
      report += `Notes: ${task.notes}\n`;
      report += `Completed: ${task.completed ? 'Yes' : 'No'}\n\n`;
    });

    return report;
  }
}

// Usage example

const taskManager = new TaskManager();

taskManager.addTask('Implement login functionality', 'John Doe', '2022-01-10', 'Remember to handle edge cases');
taskManager.addTask('Refactor code for better performance', 'Jane Smith', '2022-02-15', 'Consider using memoization');
taskManager.addTask('Write API documentation', 'John Doe', '2022-01-31', 'Include code examples');

const johnsTasks = taskManager.getTasksByAssignee('John Doe');
console.log('Tasks assigned to John Doe:', johnsTasks);

const tasksDueToday = taskManager.getTasksDueToday();
console.log('Tasks due today:', tasksDueToday);

const report = taskManager.generateReport();
console.log(report);
