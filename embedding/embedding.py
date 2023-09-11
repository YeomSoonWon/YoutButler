import os

from langchain import FAISS
from langchain.chat_models import ChatOpenAI
from langchain.document_loaders import TextLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter


def load_single_document(file_path):
    loader = TextLoader(file_path, encodings="utf-8")
    return loader.load()[0]


def load_documents(source_dir):
    all_files = os.listdir(source_dir)
    return [load_single_document(f"{source_dir}/{file_name}") for file_name in all_files]


def get_response_from_query(vector_db, query, target, k):
    # FAISS 먼저 적용하고 오기
    docs = vector_db.similarity_search(query, k=k)
    chat = ChatOpenAI(model_name="gpt-3.5-turbo-16k", temperature=0)

    prompt_template = """
        총
    """

    return None


def init_mongo_db(): # Mongo DB 생성
    return None


def init_vector_db(): # Vector DB 생성
    if not os.path.exists("DB/vector"):
        os.makedirs("DB/vector")

    embedding = OpenAIEmbeddings(openai_api_key=os.environ.get("OPENAI_API_KEY"))
    file_path = 'DB/json'
    list_name = ['test']

    for name in list_name:
        documents = load_documents(f"{file_path}/{name}")
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        docs = text_splitter.split_documents(documents)
        db = FAISS.from_documents(docs, embedding)
        db.save_local(f"DB/vector/{name}")
        print(f"DB/vector/{name} is saved")


