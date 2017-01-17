import _ from 'lodash';
import angular from 'angular';

export default function ($scope, todoFactory) {
    let params = {
        createHasInput: false
    };

    $scope.todos = [
        {
            task: 'do dishes',
            isCompleted: false,
            isEditing: false
        },
        {
            task: 'walk the cat',
            isCompleted: true,
            isEditing: false
        }
    ];

    $scope.onCompletedClick = (todo) => {
        todo.isCompleted = !todo.isCompleted;
    };

    $scope.onEditClick = (todo) => {
        todo.isEditing = true;
        todo.updatedTask = todo.task;
    };

    $scope.onCancelClick = (todo) => {
      todo.isEditing = false;
    };

    const { createTask, updateTask, deleteTask, watchCreateInputTask } = todoFactory;
    
    $scope.createTask = _.partial(createTask,
      $scope, params);
    $scope.updateTask =  _.partial(updateTask);
    $scope.deleteTask = _.partial(deleteTask, $scope);
    $scope.$watch('createTaskInput', _.partial(watchCreateInputTask, params, $scope));
}
