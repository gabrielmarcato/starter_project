# Starter Project

Projeto base React Native com Expo, configurado com as melhores práticas e ferramentas modernas de desenvolvimento.

## 🚀 Tecnologias

- [Expo](https://docs.expo.dev/) - Framework para desenvolvimento React Native
- [React Native](https://reactnative.dev/) - Framework para desenvolvimento mobile
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [React Navigation](https://reactnavigation.org/) - Navegação entre telas
- [Redux Toolkit](https://redux-toolkit.js.org/) - Gerenciamento de estado
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários
- [Zod](https://zod.dev/) - Validação de dados
- [NativeWind](https://www.nativewind.dev/) - Estilização com Tailwind CSS
- [Axios](https://axios-http.com/) - Cliente HTTP
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - Armazenamento local
- [React Native Config](https://github.com/luggit/react-native-config) - Gerenciamento de variáveis de ambiente

## 🛠️ Ferramentas de Desenvolvimento

- [ESLint](https://eslint.org/) - Linter para JavaScript/TypeScript
- [Prettier](https://prettier.io/) - Formatador de código
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [lint-staged](https://github.com/okonet/lint-staged) - Lint em arquivos staged
- [TypeScript](https://www.typescriptlang.org/) - Verificação de tipos

## 📦 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Roda o app no Android
- `npm run ios` - Roda o app no iOS
- `npm run web` - Roda o app na web
- `npm run test` - Executa os testes
- `npm run typecheck` - Verifica tipos TypeScript
- `npm run lint` - Executa o ESLint
- `npm run lint:fix` - Corrige problemas de lint
- `npm run format` - Formata o código com Prettier
- `npm run format:check` - Verifica formatação
- `npm run fix` - Executa lint:fix e format

## 🔧 Configurações

### ESLint

Configurado com regras específicas para React Native e TypeScript, incluindo:

- Plugin @typescript-eslint
- Plugin react-native
- Integração com Prettier

### Prettier

Configurado com:

- Aspas simples
- Trailing comma
- Print width: 80
- Tab width: 2
- Semicolons: true

### Git Hooks

- Pre-commit: Executa lint-staged
- Lint-staged: Executa ESLint e Prettier em arquivos modificados

## 📱 Estrutura do Projeto

```
starter_project/
├── android/          # Configurações Android
├── ios/             # Configurações iOS
├── src/             # Código fonte
│   ├── assets/      # Recursos estáticos
│   ├── components/  # Componentes reutilizáveis
│   ├── screens/     # Telas do app
│   ├── navigation/  # Configuração de navegação
│   ├── store/       # Configuração Redux
│   ├── services/    # Serviços e APIs
│   └── utils/       # Funções utilitárias
├── .eslintrc.js     # Configuração ESLint
├── .prettierrc      # Configuração Prettier
└── package.json     # Dependências e scripts
```

## 🚀 Como Começar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o projeto:
   ```bash
   npm start
   ```

## 📝 Convenções de Código

- TypeScript para tipagem estática
- ESLint + Prettier para padronização
- Commits seguindo Conventional Commits
- Hooks de pre-commit para garantir qualidade

## 🔐 Variáveis de Ambiente

O projeto usa react-native-config para gerenciar variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto seguindo o exemplo `.env.example`.

## 📱 Build e Deploy

Para gerar builds:

```bash
# Android
npm run android

# iOS
npm run ios
```

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
