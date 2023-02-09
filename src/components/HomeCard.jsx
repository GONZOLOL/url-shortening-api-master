const HomeCard = (props) => (
    <Card>
        <Image src={props.image} />
        <Information>
            <Title description={props.title} />
            <Info description={props.description} />
        </Information>
    </Card>
);