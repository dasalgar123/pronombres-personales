<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cuestionario</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
        }
        main {
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #007bff;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
        }
        .btn:hover {
            background-color: #0056b3;
        }
        #resultado {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
            color: #333;
        }
    </style>
</head>
<body>
    <main>
        <h1>Cuestionario</h1>
        <form id="quizForm">
            <div class="form-group">
                <label>Pregunta 1: ¿Cuál es la capital de Francia?</label>
                <input type="radio" name="q1" value="correcto"> París<br>
                <input type="radio" name="q1" value="incorrecto"> Londres<br>
                <input type="radio" name="q1" value="incorrecto"> Roma<br>
            </div>
            <div class="form-group">
                <label>Pregunta 2: ¿Cuál es la capital de España?</label>
                <input type="radio" name="q2" value="correcto"> Madrid<br>
                <input type="radio" name="q2" value="incorrecto"> Barcelona<br>
                <input type="radio" name="q2" value="incorrecto"> Sevilla<br>
            </div>
            <div class="form-group">
                <label>Pregunta 3: ¿Cuál es el océano más grande?</label>
                <input type="radio" name="q3" value="correcto"> Pacífico<br>
                <input type="radio" name="q3" value="incorrecto"> Atlántico<br>
                <input type="radio" name="q3" value="incorrecto"> Índico<br>
            </div>
            <div class="form-group">
                <label>Pregunta 4: ¿Cuál es el país más poblado del mundo?</label>
                <input type="radio" name="q4" value="correcto"> China<br>
                <input type="radio" name="q4" value="incorrecto"> India<br>
                <input type="radio" name="q4" value="incorrecto"> Estados Unidos<br>
            </div>
            <div class="form-group">
                <label>Pregunta 5: ¿En qué continente se encuentra Egipto?</label>
                <input type="radio" name="q5" value="correcto"> África<br>
                <input type="radio" name="q5" value="incorrecto"> Asia<br>
                <input type="radio" name="q5" value="incorrecto"> Europa<br>
            </div>
            <div class="form-group">
                <label>Pregunta 6: ¿Qué planeta es conocido como el planeta rojo?</label>
                <input type="radio" name="q6" value="correcto"> Marte<br>
                <input type="radio" name="q6" value="incorrecto"> Júpiter<br>
                <input type="radio" name="q6" value="incorrecto"> Venus<br>
            </div>
            <div class="form-group">
                <label>Pregunta 7: ¿Cuál es el metal más ligero?</label>
                <input type="radio" name="q7" value="correcto"> Litio<br>
                <input type="radio" name="q7" value="incorrecto"> Oro<br>
                <input type="radio" name="q7" value="incorrecto"> Plata<br>
            </div>
            <div class="form-group">
                <label>Pregunta 8: ¿Cuál es el animal terrestre más rápido?</label>
                <input type="radio" name="q8" value="correcto"> Guepardo<br>
                <input type="radio" name="q8" value="incorrecto"> León<br>
                <input type="radio" name="q8" value="incorrecto"> Tigre<br>
            </div>
            <div class="form-group">
                <label>Pregunta 9: ¿Cuál es el río más largo del mundo?</label>
                <input type="radio" name="q9" value="correcto"> Amazonas<br>
                <input type="radio" name="q9" value="incorrecto"> Nilo<br>
                <input type="radio" name="q9" value="incorrecto"> Misisipi<br>
            </div>
            <div class="form-group">
                <label>Pregunta 10: ¿Qué gas es esencial para que los seres humanos respiren?</label>
                <input type="radio" name="q10" value="correcto"> Oxígeno<br>
                <input type="radio" name="q10" value="incorrecto"> Nitrógeno<br>
                <input type="radio" name="q10" value="incorrecto"> Hidrógeno<br>
            </div>

            <button type="button" class="btn" onclick="calcularResultados()">Enviar</button>
        </form>

        <div id="resultado"></div>
    </main>

    <script>
        function calcularResultados() {
            const formulario = document.getElementById('quizForm');
            let correctas = 0;
            
            // Recorrer las preguntas y verificar respuestas
            const preguntas = formulario.querySelectorAll('input[type="radio"]:checked');
            preguntas.forEach((opcion) => {
                if (opcion.value === "correcto") {
                    correctas++;
                }
            });

            // Mostrar mensaje según la cantidad de respuestas correctas
            let mensaje = "";
            if (correctas <= 5) {
                mensaje = "Debes aprender más. Intenta de nuevo.";
            } else if (correctas === 6) {
                mensaje = "Pasaste raspando, estudia más.";
            } else if (correctas >= 7 && correctas <= 9) {
                mensaje = "Está bien, debes ser excelente, puedes mejorar.";
            } else if (correctas === 10) {
                mensaje = "Pasaste excelente, felicitaciones. No dejes de practicar y estudiar.";
            }

            // Mostrar resultado en el div
            document.getElementById('resultado').textContent = `Respuestas correctas: ${correctas}. ${mensaje}`;
        }
    </script>
</body>
</html>
