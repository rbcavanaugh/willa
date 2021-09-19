library(imager)    
# Note - probably run this on files before they go in the images folder...
pages <- list.files(path = here::here("docs", "images", "new"),
                    full.names = TRUE)


for(x in 1:length(pages)) {
  
  file <- load.image(pages[x])
  
  resized <- imresize(file,
                      scale = 0.30)
  
  save.image(resized,
             file = gsub("JPG", "jpg", paste(pages[x])))
  
}