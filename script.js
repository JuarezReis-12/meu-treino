document.addEventListener("DOMContentLoaded", loadExercises);

function addExercise() {
    let exercise = document.getElementById("exercise").value;
    let series = document.getElementById("series").value;
    let reps = document.getElementById("reps").value;
    let weight = document.getElementById("weight").value;

    if (exercise && series && reps && weight) {
        let exercises = JSON.parse(localStorage.getItem("exercises")) || [];

        let newExercise = {
            id: Date.now(),
            exercise,
            series,
            reps,
            weight
        };

        exercises.push(newExercise);
        localStorage.setItem("exercises", JSON.stringify(exercises));

        document.getElementById("exercise").value = "";
        document.getElementById("series").value = "";
        document.getElementById("reps").value = "";
        document.getElementById("weight").value = "";

        loadExercises();
    } else {
        alert("Preencha todos os campos!");
    }
}

function deleteExercise(id) {
    let exercises = JSON.parse(localStorage.getItem("exercises")) || [];
    let updatedExercises = exercises.filter(exercise => exercise.id !== id);

    localStorage.setItem("exercises", JSON.stringify(updatedExercises));
    loadExercises();
}

function loadExercises() {
    let exercises = JSON.parse(localStorage.getItem("exercises")) || [];
    let list = document.getElementById("exerciseList");
    list.innerHTML = "";

    exercises.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `${item.exercise} - ${item.series} séries - ${item.reps} reps - ${item.weight} kg 
            <button class="delete" onclick="deleteExercise(${item.id})">🗑️</button>`;
        list.appendChild(li);
    });
}
