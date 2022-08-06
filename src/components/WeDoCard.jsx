import "./WeDoCard.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const WeDoCard = ({tasks}) => {

    const {
        img,
        title,
        id,
        description

    } = tasks
  return (
    <Card className="what-we-do-card"  sx={{ width: 275, height: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography className="what-we-do-card-description" variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
