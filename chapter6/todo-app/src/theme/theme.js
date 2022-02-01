import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        //グローバルスタイルを追加や上書きするには
        //テーマのtheme.styles.globalを更新する
        global: {
            body: {
                //bodyに指定したいstyleを指定
                backgroundColor: "orange.50",
                color: "gray.800"
            },
            p: {
                //mdを境にPC表示とSP表示を切り替える
                //SP表示で md = 1rem = 16px, PC表示で lg = 1.125rem = 18px
                fontSize: { base: "md", md: "lg" },
                lineHeight: "tall" //tall = 1.5
            }
        }
    }
});

export default theme;