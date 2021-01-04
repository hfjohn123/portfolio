package tk.hfjohn123.portfolio;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;

@Configuration
public class MySpringMvcConfigurer {


    //区域解析器
    @Bean
    public LocaleResolver localeResolver(){
        MyLocaleResolver myLocaleResolver = new MyLocaleResolver();
        return new MyLocaleResolver();
    }
}
