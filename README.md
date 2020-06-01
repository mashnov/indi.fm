# indi.fm

### Npm dev commands
> - dev - run it for development.  
> - lint - check your code for codeStyle.  

### Components
> - Use file name only in PascalCase.  
> - Use file name in PascalCase as componentName.  
> - Use componentName in kebab-case as root className.  
> - Use self-closing tags if you don't pass content.  
> - Don't use mixins. Use helpers.  
> - Don't use props as Array. Always describe it.  

### Svg in components
> - Compress file with Svgomg  
> - Move it to src/assets/svg  
> - Import IconName from 'assets/svg/IconName'  
> - Use it as a < IconName />  
> - Use fill="currentColor" in svg path.
> - Use color in styles for set svg color.

### Styles
> - Use variables.scss to set color properties.  
> - Use only scoped styles.  
> - Use only scss style lang.  

### Vuex
> - Don't use Vuex without types from store/types.js.  
> - Don't use mapState - always write getters.  
> - Don't use mapMutations - always call actions.  
> - Don't use requests in Vuex actions. Move it to separate service.  
