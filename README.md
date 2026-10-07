# Demo: Streaming de IA con Server-Sent Events (SSE)

Píldora formativa sobre la implementación de **Server-Sent Events (SSE)** para simular el streaming de respuestas de un modelo de Inteligencia Artificial, resolviendo el problema de latencia percibida.

## 🚀 Descripción del Tema
Este proyecto demuestra cómo establecer una conexión HTTP unidireccional y persistente entre el cliente y el servidor. En lugar de esperar a que el servidor genere el 100% de la respuesta, el texto se envía en pequeños fragmentos (*chunks*) a medida que se genera, logrando un renderizado en tiempo real.

## 🛠️ Pasos para ejecutar el proyecto

1. **Clonar el repositorio:**
   \`\`\`bash
   git clone <TU_URL_DE_GITHUB_AQUI>
   cd demo-sse
   \`\`\`

2. **Instalar dependencias:**
   Asegúrate de tener Node.js instalado.
   \`\`\`bash
   npm install
   \`\`\`

3. **Ejecutar el servidor:**
   \`\`\`bash
   node server.js
   \`\`\`

4. **Probar la aplicación:**
   Abre tu navegador y navega a `http://localhost:3000`. Haz clic en "Generar Respuesta" para ver el streaming en acción.

## 📚 Recursos Adicionales
* [MDN Web Docs: Server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
* [MDN Web Docs: EventSource API](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)