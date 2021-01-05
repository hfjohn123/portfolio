package tk.hfjohn123.portfolio;

import org.springframework.web.bind.annotation.RequestMapping;

public class MainController {
    @RequestMapping("/rurl")
    public String API() {
        return "hfjohn123.tk:18080";
    }
}
