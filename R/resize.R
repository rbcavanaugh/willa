library(imager)    
# Note - probably run this on files before they go in the images folder...
pages <- list.files(path = here::here("new_images"),
                    full.names = TRUE)

replace_filename <- function(path){
  string = unlist(strsplit(path, split = "/"))
  removed_filename = head(string, -2)
  n_images = length(
    list.files(path = here::here("docs"), pattern = ".jpg")
  )
  new_file_name <- paste0("/docs/Willa", n_images+1, ".jpg")
  new_path = paste0(
    paste(removed_filename, collapse = "/"),
    new_file_name
  )
  return(new_path)
  
}

for(x in 1:length(pages)) {
  
  file <- load.image(pages[1])
  
  resized <- imresize(file,
                      scale = 0.30)

  new_file_path = replace_filename(pages[1])
  
  save.image(resized,
             file = gsub("JPG", "jpg", paste(new_file_path)))
  
}