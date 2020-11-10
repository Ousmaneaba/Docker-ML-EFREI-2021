import sys
import pickle
import preprocessing
import json

# load the model from disk
clf = pickle.load(open('nb_clf.pkl', 'rb'))
cv=pickle.load(open('tfidf_model.pkl','rb'))


def main():
	
	if len(sys.argv) > 2 :
		message = sys.argv[1]
		# return 1 if positive, 0 if negative and 2 if neutral
		text = [message]
		data = preprocessing.text_Preprocessing(text)
		vect = cv.transform(data)
		my_prediction = clf.predict(vect)
		with open(sys.argv[2], 'w') as fd:
			fd.write(str(my_prediction[0]))
	else:
		with open(sys.argv[2], 'w') as fd:
			fd.write("-1")
	
	exit
		
main()
	

