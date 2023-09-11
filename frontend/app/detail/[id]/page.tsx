type Props = {
    params: {
        id: string,
    },
}

const DetailWithID=({ params: { id } }: Props)=> {
    return (
        <main>
            Next app - DetailWithID page
            {id}
        </main>
    )
}

export default DetailWithID;
