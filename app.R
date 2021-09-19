#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#

library(shiny)
library(lubridate)
library(shiny.pwa)

calc_age <- function(todays_date = Sys.Date()){
    
    birth_date <- as.Date("2021-06-18")
    today <- todays_date
    weeks = round((birth_date %--% today) / weeks(1))
    days = round((((birth_date %--% today) / weeks(1))%%1)*7,0)
    if (days>1){
        txt = paste0("Willa is ", weeks, " weeks, ", days, " days old.")
    } else {
        txt = paste0("Willa is ",weeks, " weeks, ", days, " day old.")
    }
    return(txt)
}
# Define UI for application that draws a histogram
ui <- 
    fluidPage(
            pwa("https://rb-cavanaugh.shinyapps.io/willa/",
                output = "www",
                title = "Willa",icon = "www/icon2.png"
                ),
            column(width = 12,
                   align = "center",
                   br(),
                   uiOutput("text"),
                   br(),
                   uiOutput("photo"))
        )


# Define server logic required to draw a histogram
server <- function(input, output) {

    output$text <-
        renderUI({
            h2(
                calc_age()
            )
        })
    
    output$photo <-
        renderUI({
            tagList(
                img(src="Willa2.jpg", width = '95%')
            )
        })
    
    
}

# Run the application 
shinyApp(ui = ui, server = server)
