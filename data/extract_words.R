#library(jsonLite)
#library(quanteda)
#python.load("get_fi.py")
#texts <- as.vector(fromJSON("fi_texts.json"))
#names(texts) <- as.vector(fromJSON("text_names.json"))
#mycorpus <- corpus(texts)
#summary(mycorpus)

Extract <- function(){
    parsed <- read.csv("wholetext2.txt",sep="\t",header=F)
    colnames(parsed) <- c('tokenid', 'token', 'lemma', 'pos', 'feat', 'head', 'deprel')
    parsed <- parsed[parsed$pos %in% c("VERB","NOUN","ADJ"),]
    write.csv(lemmas,"lemmas.csv")
}



library(googlesheets)
lemmas <- read.csv("lemmas.csv")
ss <-  gs_new("käyttöjärjestelmäsanasto", ws_title = "Käyttöjärjestelmäsanasto", input = lemmas$Lemma)
