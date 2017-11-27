from lxml import etree
import glob
import json



def ReadXml(sourcefile):
    with open(sourcefile, "r") as f:
        try:
            xmlstring = f.read()
        except UnicodeDecodeError:
            print("Tiedostossa {} koodausongelma. luultavasti utf-16 pitäisi muuttaa utf-8:aan.".format(sourcefile))
            sys.exit()
    print("Processing " + sourcefile)
    xmlstring = xmlstring.replace('encoding="utf-8"','')
    root = etree.fromstring(xmlstring.strip())
    return root

def GetTexts():
    lang = 'fi'
    preparedinput = ''
    texts = list()
    fnames = list()
    wholetext = ""
    for fname in glob.glob("*tmx"):
        root = ReadXml(fname)
        xpathq = "//tuv[@lang='{}' or  @lang='{}']".format(lang, lang.upper())
        tuvs = root.xpath(xpathq)
        print("{}:{} segments".format(lang,len(tuvs)))
        thistext = ""
        for tuv in tuvs:
            for seg in tuv.getchildren():
                if seg.text:
                    thistext += " " + seg.text
                    wholetext += " " + seg.text
        texts.append(thistext)
        fnames.append(fname)
    with open ("fi_texts.json", "w") as f:
        json.dump(texts,f, ensure_ascii=False)
    with open ("text_names.json", "w") as f:
        json.dump(fnames,f, ensure_ascii=False)
    with open ("wholetext.txt", "w") as f:
        f.write(wholetext)

GetTexts()
