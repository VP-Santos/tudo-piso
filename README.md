# Tudo Piso

Site institucional e catálogo digital desenvolvido para a empresa Tudo Piso, especializada em instalação de pisos laminados, vinílicos, acabamentos como rodapé, divisor de ambiente e cantoneiras.

O projeto foi desenvolvido utilizando Next.js com foco em performance, responsividade e experiência do usuário.

# Sobre o projeto

A aplicação foi criada para apresentar os serviços da empresa de forma moderna e acessível, permitindo a divulgação de:

- Pisos laminados
- Pisos vinílicos
- Acabamentos
- Catálogo de produtos
- Formas de contato
- Redirecionamento para o whatsapp com mensagem pronta

# Tecnologias utilizadas
- Next.js
- Prisma
- React
- TypeScript
- Material UI
- CSS Responsivo

# Funcionalidades

- Catálogo de produtos
- Página institucional
- Navegação otimizada
- Componentização reutilizável
- SEO básico
- Integração com WhatsApp

# Objetivos do projeto
- Melhorar a presença digital da empresa
- Facilitar o contato com clientes
- Exibir produtos e serviços de forma organizada
- Garantir boa experiência em dispositivos móveis


# estrutura

A estrutura do projeto foi pensada em renderizar linhas, produtos e seus fabricantes, usando rotas dinamicas.

```bash
app/
├── page.tsx
├── components/
│   ├── client/
│   │   └── ...
│   └── server/
│       └── ...
├── quem-somos/
│   └── page.tsx
└── [category]/
    ├── page.tsx
    └── [line]/
        ├── page.tsx
        └── [product]/
            └── page.tsx 
```

# Explicando estrutura das pastas

O projeto foi estruturado utilizando o App Router do Next.js, separando responsabilidades entre componentes client-side e server-side.

As pastas com colchetes ([category], [line], [product]) representam rotas dinâmicas, permitindo a geração escalável de páginas de catálogo.

Essa abordagem facilita:
- URLs amigáveis
- melhor indexação SEO
- reutilização de páginas
- escalabilidade do catálogo sem duplicação de código

Exemplo de rota gerada dinamicamente:

```bash
/laminados/smart/patina-cottage
```

# Components

A pasta components foi separada entre componentes client e server para melhor organização e aproveitamento dos recursos do Next.js.

## client

Componentes com interatividade no navegador e uso de hooks como:

useState
useEffect
useRouter

Esses componentes são responsáveis por comportamentos dinâmicos da interface.

## server

Componentes renderizados no servidor para otimização de:

performance
SEO
carregamento inicial
redução de JavaScript no client

Essa separação melhora a escalabilidade e manutenção da aplicação.

# Como executar o projeto

### Clone o repositório:

```bash 
https://github.com/vitor-p-santos/tudo-piso.git

cd tudo-piso
```

### Configure as variáveis de ambiente

Renomeie o arquivo .env-example para .env e preencha as informações necessárias:

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_PHONE_NUMBER=
```

- DATABASE_URL
  - URL de conexão principal com o banco de dados
- DIRECT_URL
  - URL de conexão direta utilizada pelo ORM/migrations
- NEXT_PUBLIC_PHONE_NUMBER
  - Número utilizado no redirecionamento para

### Montando o banco de dados 

Após configurar o arquivo .env, execute as migrations para criar a estrutura do banco de dados.

Na raiz do projeto, rode os seguintes comandos:

### Instale as dependências:

```bash
npm install
```

### Execute as migrations

```bash
npx prisma migrate dev
```

### Popule o banco com dados de teste

```bash
npx ts-node prisma/seed.ts
```

# Execute o projeto:

Após finalizar a configuração do banco de dados, execute:

```bash
npm run dev
```

A aplicação estará disponível em: http://localhost:3000
