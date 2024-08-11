# 🏗 Alkamari ![Alkamari Logo](./logoAlka.svg)

**Alkamari** es una aplicación descentralizada (dApp) de P2P que tiene como objetivo facilitar el intercambio de BOB por USDT, especialmente diseñada para Bolivia. Este proyecto es uno de los primeros de su tipo en el país, y está desplegado en la red **Arbitrum Sepolia**.

## 🛠 Arbitrum Sepolia Deployed Contracts

- **AlkamariEscrow**: `0x65E277875eB98136fD54003ea668630fe89e024d`
- **USDT**: `0x7058f6D05fC49D0889a137a0A695AaE7e19D45bE`

## 🚀 Participación en Competencias

Alkamari está participando en la categoría **DeFi**, destacándose por su enfoque en las necesidades del mercado boliviano.

## 📄 Descripción del Proyecto

Alkamari ofrece una plataforma segura y descentralizada donde los usuarios pueden intercambiar BOB por USDT directamente entre pares (P2P). La seguridad de las transacciones está garantizada a través de contratos inteligentes, minimizando el riesgo de fraude y eliminando la necesidad de intermediarios.

## 🛠 Instalación

Para configurar y ejecutar el proyecto Alkamari localmente, sigue estos pasos:

1. **Clona el repositorio**.

2. **Instala las dependencias** utilizando Yarn.

3. **Configura las variables de entorno**:

   Dentro de la carpeta `packages/nextjs/`, crea un archivo `.env.local` y copia la configuración de ejemplo proporcionada.

   Asegúrate de reemplazar los valores con tus propias claves de API y configuraciones específicas.

   # Template for NextJS environment

   ```
    NEXT_PUBLIC_ALCHEMY_API_KEY=your-alchemy-api-key
    NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your-wallet-connect-project-id
    NEXT_PRIVATE_PAYMASTER_URL="https://paymaster.biconomy.io/api/v1/421614/your-paymaster-url"
    NEXT_PUBLIC_PRIVY_ID="your-privy-id"
    NEXT_PRIVATE_RPC_URL=

    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-google-analytics-id
    NEXT_PUBLIC_RPC_URL=https://sepolia-rollup.arbitrum.io/rpc
    NEXT_PUBLIC_PRIVY_ID=your-privy-id
    NEXT_PUBLIC_ENVIRONMENT=localhost
    NEXT_PUBLIC_BICONOMY_BUNDLER_URL=https://bundler.biconomy.io/api/v2/421614/your-bundler-url
    NEXT_PUBLIC_BICONOMY_PAYMASTER_URL=https://paymaster.biconomy.io/api/v1/421614/your-paymaster-url
    NEXT_PUBLIC_BICONOMY_PAYMASTER_API_KEY=your-biconomy-api-key
    NEXT_PUBLIC_GETSTREAM_API_KEY=your-getstream-api-key
   ```

4. **Inicia la aplicación**.

Esto iniciará la aplicación en modo desarrollo y podrás acceder a ella en `http://localhost:3000`.

## ⚙️ Tecnologías Utilizadas

- **Blockchain**: Arbitrum Sepolia
- **Contratos Inteligentes**: Solidity
- **Interfaz de Usuario**: React, Tailwind CSS, Next.js
- **Manejo de Estado**: Redux, Context API

## 🔗 Enlaces Relevantes

- Documentación Técnica
- Whitepaper
- Guía de Usuario

## 📞 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarnos a través de [correo electrónico](mailto:info@alkamari.com).

---

_Este proyecto es una iniciativa innovadora para fortalecer la adopción de criptomonedas en Bolivia y proporcionar soluciones financieras accesibles para todos._
