train <- read.csv('./train.csv', stringsAsFactors = F)
test  <- read.csv('./test.csv', stringsAsFactors = F)

full  <- bind_rows(train, test) # bind training & test data

# check data
str(full)