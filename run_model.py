import sys
import pickle
import preprocessing

# load the model from disk
clf = pickle.load(open('nb_clf.pkl', 'rb'))
cv=pickle.load(open('tfidf_model.pkl','rb'))


def main():
	
	if len(sys.argv) > 1 :
		message = sys.argv[1]
		# return 1 if positive, 0 if negative and 2 if neutral
		text = [message]
		data = preprocessing.text_Preprocessing(text)
		vect = cv.transform(data)
		my_prediction = clf.predict(vect)
		
		print(str(my_prediction))
	else:
		print("-1") # error
	exit
		
main()
	

